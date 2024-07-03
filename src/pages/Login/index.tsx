import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonList, IonItem, IonInput, IonInputPasswordToggle, IonButtons, IonButton } from "@ionic/react";
import { useTranslation } from "react-i18next";

export const Login : React.FC = () => {
    const { t } = useTranslation();

    return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent color="light" scrollY={false}>
				<IonList inset={true} lines="full">
					<IonItem>
						<IonInput labelPlacement="stacked" label={t('labels.username')} type="text" />
					</IonItem>
					<IonItem>
						<IonInput labelPlacement="stacked" label={t('labels.password')} type="password">
							<IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
						</IonInput>
					</IonItem>
					<IonItem>
						<IonButton expand="block">{t('buttons.login')}</IonButton>
					</IonItem>
				</IonList>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonTitle>Footer</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonPage>
    );
}
