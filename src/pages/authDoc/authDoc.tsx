import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './authDoc.css';

const authDoc: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Autenticación</IonTitle>
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
           <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Autenticacion De Documentos</IonCardTitle>
         </IonCardHeader>

         <IonCardContent>

         <IonItem>
           <IonLabel position="floating"> Seleccione Archivos</IonLabel>
         </IonItem>

         <IonItem>
        <input type="file"></input>
        </IonItem>

         <IonButton expand="block" >
           Autenticar
         </IonButton>
         </IonCardContent>
       </IonCard>

         </IonCol>
         {/* footer */}
       <IonCol size="1"></IonCol>
       </IonRow>          

      </IonGrid>

     </IonContent>
    </IonPage>
  );
};

export default authDoc;
