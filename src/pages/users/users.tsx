import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './users.css';

const users: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle> Usuarios </IonTitle>
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
           <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Usuarios</IonCardTitle>
         </IonCardHeader>

         <IonCardContent>

         <IonItem>
           <IonLabel position="floating"> Nombres</IonLabel>
           <IonInput type="text" />
         </IonItem>
         <IonItem>
           <IonLabel position="floating"> Apellidos</IonLabel>
           <IonInput type="text" />
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Direccion</IonLabel>
           <IonInput type="text" />
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Telefono</IonLabel>
           <IonInput type="text" />
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Genero</IonLabel>
           <IonSelect >
              <IonSelectOption value="M">M</IonSelectOption>
              <IonSelectOption value="F">F</IonSelectOption>
            </IonSelect>
         </IonItem>

         <IonButton expand="block" >
          Registrar
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

export default users;