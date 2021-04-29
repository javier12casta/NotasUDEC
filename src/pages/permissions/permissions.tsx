import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
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
         <IonCol size="2"></IonCol>
         {/* login */}
         <IonCol size="10">

         <IonCard>
         <IonCardHeader>
           <IonCardTitle style={{ fontSize: "30px", color: "#000" }}>Permisos</IonCardTitle>
         </IonCardHeader>

         <IonCardContent>

         <IonItem>
           <IonLabel position="floating">Certificacion</IonLabel>
           <IonSelect >
              <IonSelectOption value="Habilitado">Habilitado</IonSelectOption>
              <IonSelectOption value="Desabilitado">Desabilitado</IonSelectOption>
            </IonSelect>
         </IonItem>
         <IonItem>
           <IonLabel position="floating">Documentos De Usuario</IonLabel>
           <IonSelect >
              <IonSelectOption value="Habilitado">Habilitado</IonSelectOption>
              <IonSelectOption value="Desabilitado">Desabilitado</IonSelectOption>
            </IonSelect>
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Autenticacion De Documentos</IonLabel>
           <IonSelect >
              <IonSelectOption value="Habilitado">Habilitado</IonSelectOption>
              <IonSelectOption value="Desabilitado">Desabilitado</IonSelectOption>
            </IonSelect>
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Usuarios</IonLabel>
           <IonSelect >
              <IonSelectOption value="Habilitado">Habilitado</IonSelectOption>
              <IonSelectOption value="Desabilitado">Desabilitado</IonSelectOption>
            </IonSelect>
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Roles</IonLabel>
           <IonSelect >
              <IonSelectOption value="Habilitado">Habilitado</IonSelectOption>
              <IonSelectOption value="Desabilitado">Desabilitado</IonSelectOption>
            </IonSelect>
         </IonItem>

         <IonItem>
           <IonLabel position="floating">Permisos</IonLabel>
           <IonSelect >
              <IonSelectOption value="Habilitado">Habilitado</IonSelectOption>
              <IonSelectOption value="Desabilitado">Desabilitado</IonSelectOption>
            </IonSelect>
         </IonItem>


         <IonButton expand="block" >
           Aceptar
         </IonButton>
         </IonCardContent>
       </IonCard>

         </IonCol>
         {/* footer */}
       <IonCol size="2"></IonCol>
       </IonRow>          

       </IonGrid>

     </IonContent>
   </IonPage >
  );
};

export default permissions;