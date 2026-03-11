import { useEffect, useMemo, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmeeehdclwipxxnkkvdx.supabase.co';
const supabaseKey = 'sb_publishable_m7LdIZnyQiK7zeIwMdkbzg_NHSQ9CFJ';
const supabase = createClient(supabaseUrl, supabaseKey);

const STORAGE_BUCKET = 'imagens';

function sanitizeFileName(fileName: string): string {
    return fileName.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9._-]/g, '').toLowerCase();
}

async function salvarRelacaoFoto(id: number, foto: string, ordemFoto: number) {
    const relacaoPadrao = await supabase
        .from('Fotos')
        .insert([{ id: id , Foto: foto }]);

    if (!relacaoPadrao.error) {
        return;
    }

    const relacaoAlternativa = await supabase
        .from('Fotos')
        .insert([{ id: id, Foto: foto, idFoto: ordemFoto }]);

    if (relacaoAlternativa.error) {
        throw new Error(
            `Falha ao salvar relacao da foto. Fotos: ${relacaoPadrao.error.message}. Fotos: ${relacaoAlternativa.error.message}`
        );
    }
}

export function Produto() {
     const [descricao, setDescricao] = useState('');
     const [imagens, setImagens] = useState<File[]>([]);
     const [enviando, setEnviando] = useState(false);
     const [mensagem, setMensagem] = useState('');

    const previews = useMemo(
        () => imagens.map((imagem) => ({ nome: imagem.name, url: URL.createObjectURL(imagem) })),
        [imagens]
    );

    useEffect(() => {
        return () => {
            previews.forEach((preview) => URL.revokeObjectURL(preview.url));
        };
    }, [previews]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImagens(Array.from(event.target.files));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMensagem('');

        if (!descricao.trim()) {
            setMensagem('Informe a descricao do produto antes de salvar.');
            return;
        }

        if (!imagens.length) {
            setMensagem('Selecione pelo menos uma imagem para upload.');
            return;
        }

        setEnviando(true);

        try {
            const { data: produtoCriado, error: erroProduto } = await supabase
                .from('Produto')
                .insert([{ Descricao: descricao.trim() }])
                .select('id')
                .single();

            if (erroProduto || !produtoCriado) {
                throw new Error(erroProduto?.message || 'Falha ao obter o id do produto criado.');
            }

            const produtoId = Number(produtoCriado.id);
            if (!Number.isFinite(produtoId)) {
                throw new Error('ID do produto invalido retornado pelo banco.');
            }

            for (let i = 0; i < imagens.length; i++) {
                const imagem = imagens[i];
                const fileName = sanitizeFileName(imagem.name);
                const filePath = `produto/${produtoId}/${Date.now()}-${i + 1}-${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from(STORAGE_BUCKET)
                    .upload(filePath, imagem, {
                        upsert: true,
                        contentType: imagem.type || 'application/octet-stream'
                    });

                if (uploadError) {
                    throw new Error(`Erro ao fazer upload da imagem ${imagem.name}: ${uploadError.message}`);
                }

                await salvarRelacaoFoto(produtoId, filePath, i + 1);
            }

            setMensagem('Produto e imagens salvos com sucesso.');
            setDescricao('');
            setImagens([]);
        } catch (err) {
            const textoErro = err instanceof Error ? err.message : 'Erro inesperado ao salvar.';
            setMensagem(textoErro);
            console.error(err);
        } finally {
            setEnviando(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-end">
                <Button as="input" type="submit" value={enviando ? 'Salvando...' : 'Salvar'} disabled={enviando} />
            </div>

            {mensagem ? <p>{mensagem}</p> : null}
 
            <Form.Group className="mb-3" controlId="descricaoInput">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Selecione as imagens</Form.Label>
                <Form.Control type="file" multiple onChange={handleFileChange} />
            </Form.Group>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Foto</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {imagens.map((imagem, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{imagem.name}</td>
                            <td>
                                <img
                                    src={previews[index]?.url}
                                    alt={`Imagem ${index + 1}`}
                                    style={{ width: '100px' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Form>
    );
}
