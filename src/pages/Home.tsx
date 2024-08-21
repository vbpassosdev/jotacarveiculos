import { GroupCard } from '../components/card';
import { ControlledCarousel } from '../components/caurosel';

export function Home (){
    return(
    <div  className="mb-4">    
        <div className="mb-4">
            <ControlledCarousel>
            </ControlledCarousel>
        </div>
        <GroupCard>
            
        </GroupCard>
    </div>
    )
}