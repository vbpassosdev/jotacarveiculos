import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { supabase } from '../supabaseClient';
import { FALLBACK_IMAGE, getPublicImageUrl } from '../utils/image';

interface Foto {
  Foto: string;
  idFoto: number;
}

interface Produto {
  id: number;
  
  Descricao: string;
  Fotos: Foto[];
}

const PLACEHOLDER_CARDS_COUNT = 6;

async function fetchProdutos(): Promise<Produto[]> {
  const { data, error } = await supabase
    .from('Produto')
    .select(
      `
      id,
      Descricao,
        Fotos (
        idFoto,
        Foto
      )
    `
    );

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as unknown as Produto[];
}

export function GroupCard() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      let isMounted = true;

      const loadProdutos = async () => {
        setLoading(true);
        setError(null);

        try {
          const loadedProdutos = await fetchProdutos();
          if (isMounted) {
            setProdutos(loadedProdutos);
          }
        } catch {
          if (isMounted) {
            setError('Nao foi possivel carregar os produtos no momento.');
          }
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      };

      loadProdutos();

      return () => {
        isMounted = false;
      };
    }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <CardGroup>
        <Row>

        {loading && Array.from({ length: PLACEHOLDER_CARDS_COUNT }).map((_, index) => (
        <Col key={`placeholder-${index}`} md={4} className="mb-4">
            <Card>
            <Card.Img
              variant="top"
              src={FALLBACK_IMAGE}
              alt={`Produto ${index + 1}`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
            <Card.Body>
                <Card.Title>Carregando...</Card.Title>
                <Card.Text>
                Buscando informacoes do produto...
                </Card.Text>
            </Card.Body>
    
            </Card>
            </Col>

        ))}

        {!loading && produtos.map((item) => (
        <Col key={item.id} md={4} className="mb-4">
            <Card>
            <Card.Img
              variant="top"
              src={getPublicImageUrl(item.Fotos?.[0]?.Foto  || '', 'imagens')}
              alt={ item.Descricao}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
            
    
            </Card>
            </Col>

        ))}
      </Row>
        
    </CardGroup>
  );
}
