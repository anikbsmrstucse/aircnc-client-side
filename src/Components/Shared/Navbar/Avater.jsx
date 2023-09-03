import { useContext } from 'react';
import avater from '../../../assets/images/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';


const Avater = () => {
    const {user} = useContext(AuthContext);

    return <img className='rounded-full' src={user && user.photoURL ? user.photoURL : avater} height='30' width='30' alt="profile" />
};

export default Avater;