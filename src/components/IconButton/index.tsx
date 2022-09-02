import { Container } from './styles';
import BookYourselfIcon from '../../assets/images/BookYourself.svg';
import arrowIcon from '../../assets/images/arrow.svg';
import { EnvelopeOpen, EnvelopeSimple, InstagramLogo, Phone, CircleWavyCheck, MicrophoneStage, MusicNoteSimple, CookingPot, Camera, PaintBrush, MusicNote, MusicNotesPlus, MusicNotes, WhatsappLogo } from 'phosphor-react';

interface IconButtonProps {
  text: string;
  description: string;
  image: string;
  link?: string | null;
  type: string;
}

export function IconButton({ text, description, image, link, type }: IconButtonProps) {
  return (
      <Container onClick={
        link? type === 'skill'? undefined : ()=>{window.open(link)} : undefined
      } type={type} link={link}>
        <div>
          {image === 'Email' && <EnvelopeOpen color="#fff700" weight="light" size={60} />}
          {image === 'Phone' && <Phone color="#fff700" weight="light" size={60} />}
          {image === 'Instagram' && <InstagramLogo color="#fff700" weight="light" size={60} />}
          {image === 'Whatsapp' && <WhatsappLogo color="#fff700" weight="light" size={60} />}
          {image === 'Cert' && <CircleWavyCheck color="#fff700" weight="light" size={60} />}
          {image === 'Sing' && <MicrophoneStage color="#fff700" weight="light" size={60} />}
          {image === 'Music' && <MusicNotes color="#fff700" weight="light" size={60} />}
          {image === 'Cook' && <CookingPot color="#fff700" weight="light" size={60} />}
          {image === 'Camera' && <Camera color="#fff700" weight="light" size={60} />}          
          {image === 'Brush' && <PaintBrush color="#fff700" weight="light" size={60} />}          
          
          <div>
            <h3>{text}</h3>
            {description === ''? '' : <p>{description}</p>}
          </div>
          <img src={arrowIcon} alt="Arrow" />
        </div>
      </Container>
  )
}