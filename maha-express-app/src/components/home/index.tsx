import styles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';
import Typography from '../typography/typography';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/hero.png"
            alt="Maha Express"
            width={96}
            height={96}
            className={styles.heroImage}
          />
          <Typography variant='lg'>Maha Express</Typography>
          <p className={styles.subtitle}>Somos a sua entrega em duas Rodas</p>
          <Link href="https://api.whatsapp.com/send?phone=5534984066046&text=Ol%C3%A1!">
            <Button icon='logoWhatsapp'>
              Entre em contato
            </Button>
          </Link>
          <div className={styles.containerDescription}>
          <Typography variant='md'>Oferecemos um serviço de delivery ágil, entregas de pacotes com total segurança, moto táxis para todo o perímetro urbano e viagens regionais.</Typography>
          <Typography variant='sm'>Esteja no controle de todas as suas necessidades de transporte e entrega conosco!</Typography>
          <Image
            src="/logoKoD.png"
            alt="King of Delivery"
            width={56}
            height={56}
            className={styles.KoDImage}         
          />
          </div>
        </div>
    </main>
  );
}

export default Home