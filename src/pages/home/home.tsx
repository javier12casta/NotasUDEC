import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './home.css';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
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
            <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Notas Udec</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <IonItem>
          <IonTextarea
              disabled
              readonly
            > El sistema garantiza la transparencia y el seguimiento en la presentación de documentos legales generados por universidades, también siendo aplicable a otros documentos como Diplomas, certificados de estudios y actas de grado. 
            </IonTextarea>
            </IonItem>

          </IonCardContent>
        </IonCard>

          </IonCol>

        </IonRow>          

        </IonGrid>

      </IonContent>
    </IonPage >
  );
};

export default Home;
