import { BackendErrorsInteface } from "src/app/shared/types/backendErrors.interface"

export interface CreateArticleStateInterface{
    isSubmitting:boolean
    validationErrors:BackendErrorsInteface | null
    
}