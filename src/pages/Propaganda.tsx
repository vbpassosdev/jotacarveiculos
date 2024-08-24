
import { Button, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export function Propaganda(){
    return (
            
            <Form>  
                <div className="d-flex justify-content-end">
                <Button as="input" type="submit" value="Salvar" />
                </div>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Selecione as imagens</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
            
            <Table>
                <thead>
                    <tr>
                        <th>...</th>
                        <th>Caminho da Imagem</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>c:\foto1.jpg</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>c:\foto1.jpg</td>
                        <td></td>
                    </tr>

                </tbody>
            </Table>
        </Form>    
    )
}


