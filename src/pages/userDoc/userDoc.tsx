import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './userDoc.css';

const userDoc: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>documentos de usuario</IonTitle>
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
            <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Documentos De Usuario</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

          <IonList>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
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

export default userDoc;