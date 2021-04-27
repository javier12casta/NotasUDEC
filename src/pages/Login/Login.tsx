import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import './Login.css';

const Login: React.FC = () => {

  return (
    <IonPage>
      {/* cabecera en mobile */}
      <IonHeader>
        <IonToolbar className="bar">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
       

        <IonGrid>
        <IonRow>
          <IonCol size="1"></IonCol>
          {/* login */}
          <IonCol size="10">

          <IonCard>
          <IonCardHeader>
          <img src="assets/img/Logo.png" className="profile"/>
            <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Iniciar sesión</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

          <IonItem>
            <IonLabel position="floating"> Nombre de usuario</IonLabel>
            <IonInput type="text" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating"> Contraseña</IonLabel>
            <IonInput type="password" />
          </IonItem>

          <IonButton expand="block" >
            Iniciar sesión
          </IonButton>
          </IonCardContent>
        </IonCard>

          </IonCol>
          {/* footer */}
        <IonCol size="1"></IonCol>
        </IonRow>          

        </IonGrid>

      </IonContent>
    </IonPage >
  );
};

export default Login;
