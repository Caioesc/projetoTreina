import { Image } from 'react-bootstrap';

import imgAvatar from '../../assets/avatar.png';

function MyAvatar() {
    return (
        <>
            <Image width={120} height={120} src={imgAvatar} roundedCircle />
        </>
    );
}

export default MyAvatar;
