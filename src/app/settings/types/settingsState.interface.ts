import { BackendErrorsInteface } from 'src/app/shared/types/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInteface | null;
}
