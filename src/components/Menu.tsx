import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { add, documentLock, documents, home, person, school, settings , people , newspaper , construct } from 'ionicons/icons';
import './Menu.css';
import { IonAvatar} from '@ionic/react';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Iniciar sesión',
    url: '/page/login',
    iosIcon: person,
    mdIcon: person
  },
  {
    title: 'Certificación',
    url: '/page/cert',
    iosIcon: documentLock,
    mdIcon: documentLock
  },
  {
    title: 'Documentos de usuario',
    url: '/page/docs',
    iosIcon: documents,
    mdIcon: documents
  },
  {
    title: 'Autenticación de documentos',
    url: '/page/auth',
    iosIcon: school,
    mdIcon: school
  },
  {
    title: 'Usuarios',
    url: '/page/settings',
    iosIcon: people,
    mdIcon: people
  },
  {
    title: 'Roles',
    url: '/page/settings',
    iosIcon: construct,
    mdIcon: construct
  },
  {
    title: 'Permisos',
    url: '/page/settings',
    iosIcon: newspaper,
    mdIcon: newspaper
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
           
              <IonAvatar>
                <img src="assets/img/Logo.png" />
              </IonAvatar>
              <IonLabel>Notas Certificadas UDEC</IonLabel>
            
          </IonListHeader>

          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
