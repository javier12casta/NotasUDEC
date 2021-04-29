import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './certificado.css';

const certificado: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Certificacion</IonTitle>
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
         <IonIcon name="document-text-outline"></IonIcon>

       
           <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Certificacion De Documentos</IonCardTitle>
         </IonCardHeader>

         <IonCardContent>

         <IonItem>
           <IonLabel position="floating"> Seleccione Archivos</IonLabel>
         </IonItem>

         <IonItem>
        <input type="file" ></input>
        </IonItem>

         <IonButton expand="block" >
           Certificar
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

export default certificado;
