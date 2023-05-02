import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Search from './Search';
import { useId } from 'react';


const Tab1: React.FC = () => {
  function setCurrentFood(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Or choose from ready lists </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Home" />
      <IonSearchbar placeholder="Search for ingredients"></IonSearchbar>
      </IonContent>
      
      <IonContent>

      <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" placeholder="Select all fruits that apply" multiple={true}>
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
