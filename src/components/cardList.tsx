import { createClient } from '@supabase/supabase-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

// Configuração do Supabase

const supabaseUrl = 'https://rzartyqwolxjochapqpm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YXJ0eXF3b2x4am9jaGFwcXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNDQ1MzcsImV4cCI6MjAzOTkyMDUzN30.05yOZiX3luCq0MKNdmRukRiuWhZUujQ8i46RZeC8emc'
const supabase = createClient(supabaseUrl, supabaseKey)

interface CarroFoto {
  id: string;
  idFoto: number;
  DataInclusao: Date;
  CaminhoImagem: string;
}

// Interface para os dados dos carros
interface Car {
  id: number;
  Marca: string;
  Modelo: string;
  Descricao: string;
  Valor: number;
  Fabricacao: number;
  CarrosxFotos: CarroFoto[];  

}

  
// Função para buscar os dados dos carros
async function fetchCars(): Promise<Car[]> {
  const { data, error } = await supabase
    .from('Carros')  // Verifique se 'Carros' é o nome correto da tabela
    .select(`
      id, 
      Marca, 
      Modelo, 
      Descricao, 
      Valor, 
      Fabricacao, 
      CarrosxFotos (
        id, 
        idFoto,
        DataInclusao, 
        CaminhoImagem
      )
    `);

  if (error) {
    console.error('Erro ao buscar dados:', error.message);
    return [];
  }

  if (!data) {
    console.error('Nenhum dado foi retornado da consulta.');
    return [];
  }

  // Se o tipo de dado retornado for compatível, o casting explícito pode ser feito
  return data as unknown as Car[]; 
}



// Componente 
export function CardList() {
  const [cars, setCars] = useState<Car[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      const carData = await fetchCars();
      setCars(carData);
      setLoading(false);
    };

    getCars();
  }, []);



  if (loading) return <p>Carregando...</p>;

  return (
    <Container>
      <h1 className="text-center my-4">Lista de Carros</h1>


      <Row>
        {cars.map((car) => (
          <Col key={car.id} md={4}> 
            <Card className="mb-4">
              <Card.Body>
                
                <Carousel>  
                    {car?.CarrosxFotos?.map((foto) => (
                        <Carousel.Item key={foto.idFoto}>
                        <img className="d-block w-100"src={foto.CaminhoImagem}/>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <Card.Title>{car.Modelo}</Card.Title>
                <Card.Text><strong>Marca:</strong> {car.Marca}</Card.Text>
                <Card.Text><strong>Fabricação:</strong> {car.Fabricacao}</Card.Text>
                <Card.Text><strong>Descrição:</strong> {car.Descricao}</Card.Text>
                <Card.Text><strong>Valor:</strong> R${car.Valor.toFixed(2)}</Card.Text>
                <Button variant="primary">Ver Mais</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
