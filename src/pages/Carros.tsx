import {  useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rzartyqwolxjochapqpm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YXJ0eXF3b2x4am9jaGFwcXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNDQ1MzcsImV4cCI6MjAzOTkyMDUzN30.05yOZiX3luCq0MKNdmRukRiuWhZUujQ8i46RZeC8emc';
const supabase = createClient(supabaseUrl, supabaseKey);

export function Carros() {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagens, setImagens] = useState<File[]>([]); // Define o tipo File[] para as imagens

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImagens(Array.from(event.target.files));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('Carros')
            .insert([
                {
                    Marca: marca,
                    Modelo: modelo,
                    Fabricacao: parseInt(ano), // Converte o ano para número
                    Descricao: descricao
                }
            ]);

        if (error) {
            console.error('Erro ao inserir carro:', error);
            return;
        }

        if (data != null && data !== undefined) {
            const carroId = '0261f886-6d31-4832-ab74-4119a72204b6'; 
            const idFoto = 1;
            
            for (let i = 0; i < imagens.length; i++) {
                const imagem = imagens[i];
                const filePath = `carros/${carroId}/${imagem.name}`;

                const { error: uploadError } = await supabase.storage
                    .from('CarrosxFotos') 
                    .upload(filePath, imagem);

                if (uploadError) {
                    console.error('Erro ao fazer upload da imagem:', uploadError);
                } else {
                    console.log('Imagem carregada com sucesso:', filePath);

                    const { error: relError } = await supabase
                        .from('Carrosxfotos')
                        .insert([
                            {
                                id: carroId,
                                CaminhoImagem: filePath,
                                idFoto : idFoto
                            }
                        ]);

                    if (relError) {
                        console.error('Erro ao inserir o caminho da imagem:', relError);
                    } else {
                        console.log('Caminho da imagem inserido com sucesso');
                    }
                }
            }
        } else {
            console.error('Falha ao obter o ID do carro recém-inserido.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-end">
                <Button as="input" type="submit" value="Salvar" />
            </div>
            <Form.Group className="mb-3" controlId="marcaInput">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Marca"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="modeloInput">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Modelo"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="anoInput">
                <Form.Label>Ano Fabricação</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Ano"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />
            </Form.Group>
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
                        <th>Caminho da Imagem</th>
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
                                    src={URL.createObjectURL(imagem)}
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
