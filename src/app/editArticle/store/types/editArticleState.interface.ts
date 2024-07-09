import { ArticleInterface } from "src/app/shared/types/article.interface"
import { BackendErrorsInteface } from "src/app/shared/types/backendErrors.interface"

export interface EditArticleStateInterface{
    isSubmitting:boolean
    validationErrors:BackendErrorsInteface | null
    isLoading:boolean
    article:ArticleInterface | null
}