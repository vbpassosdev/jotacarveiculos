import { CardList } from '../components/cardList';
import { ControlledCarousel } from '../components/caurosel';

export function Home (){
    return(

        <><div>
            <CardList>

            </CardList>

        </div><div className="mb-4">
                <div className="mb-4">
                    <ControlledCarousel>
                    </ControlledCarousel>
                </div>


            </div></>
    )
}