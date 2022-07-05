import './Profile.css';
import {Card,Button} from 'react-bootstrap';
import NavbarComponent from '../Navbar/NavbarComponent';
export default function Profile(){
    return(
        <div>
            <NavbarComponent/>
            <Card className="text-center">
            <div>
            <Card.Img variant="top" className='banner-pic'src="https://i.pinimg.com/originals/d0/7e/fe/d07efef31e8102a9577b8ff4dcda06d7.jpg" height={170}/>
            <img className='profile-pic' src='https://venturebeat.com/wp-content/uploads/2012/02/zuck-power.jpg?fit=640%2C480&strip=all'/>
            </div>
             <Card.Text>
                Alex Mey
            </Card.Text>

            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        </div>
    )
}