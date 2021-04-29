import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './permissions.css';

const permissions: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Permisos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
       
        <IonGrid>
        <IonRow>
          <IonCol size="1"></IonCol>
          {/* login */}
          <IonCol size="10">

          </IonCol>
          {/* footer */}
        <IonCol size="1"></IonCol>
        </IonRow>          

        </IonGrid>

      </IonContent>
    </IonPage >
  );
};

export default permissions;