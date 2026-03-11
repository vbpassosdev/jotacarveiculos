import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { supabase } from '../supabaseClient';
import { FALLBACK_IMAGE } from '../utils/image';

interface Foto {
  id: string;
  idFoto: number;
  Foto?: string;
  foto?: string;
  imageUrl?: string;
}

interface Produto {
  id: number;
  Descricao: string;
  Fotos: Foto[];  
}
  
// Função para buscar os dados dos produtos
async function fetchProdutos(): Promise<Produto[]> {
  const { data, error } = await supabase
    .from('Produto')
    .select(`
      id,  
      Descricao, 
      Fotos (
        id, 
        idFoto,
        Foto)
    `);

  if (error) {
    console.error('Erro ao buscar dados:', error.message);
    return [];
  }

  if (!data) {
    console.error('Nenhum dado foi retornado da consulta.');
    return [];
  }

  const produtos = data as unknown as Produto[];

  return produtos.map((produto) => ({
    ...produto,
    Fotos: (produto.Fotos || []).map((foto) => ({
      ...foto,
      imageUrl: foto.Foto || FALLBACK_IMAGE,
    })),
  }));
}


// Componente 
export function CardList() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProdutos = async () => {
      try {
        setLoading(true);
        setError(null);
        const produtoData = await fetchProdutos();
        setProdutos(produtoData);
      } catch {
        setError('Nao foi possivel carregar os produtos no momento.');
      } finally {
        setLoading(false);
      }
    };

    getProdutos();
  }, []);



  if (loading) {
    return (
      <Container>
        <h1 className="text-center my-4">Imagens</h1>
        <Row>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col key={`skeleton-${index}`} md={4} className="mb-4">
              <Card className="h-100">
                <div className="skeleton skeleton-image" />
                <Card.Body>
                  <div className="skeleton skeleton-title" />
                  <div className="skeleton skeleton-text" />
                  <div className="skeleton skeleton-text short" />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h1 className="text-center my-4">Imagens</h1>


      <Row>
        {produtos.map((produto) => (
          <Col key={produto.id} md={4}> 
            <Card className="mb-4">
              <Card.Body>
                
                <Carousel>  
                    {produto?.Fotos?.map((foto) => (
                        <Carousel.Item key={foto.idFoto}>
                        <img
                          className="d-block w-100"
                          src={foto.imageUrl || FALLBACK_IMAGE}
                          alt={`${produto.Descricao} - foto ${foto.idFoto}`}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.src = FALLBACK_IMAGE;
                          }}
                        />
                        </Carousel.Item>
                    ))}
                </Carousel>

                <Card.Text><strong>Descrição:</strong> {produto.Descricao}</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
