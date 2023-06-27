import {Routes, Route} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { Navigate } from 'react-router-dom'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {

    const {status} = useCheckAuth()

    if(status === 'checking'){
        return <CheckingAuth/>
    }

    return (
        <Routes>
            {/* Login y registro */}
            {/* Cualquier path que entre por Auth va a mostrar el elemento AuthRoutes */}


            {/* Journal APP */}
            {
                (status === 'authenticated')
                ? <Route path='/*' element={<JournalRoutes/>}/> 
                : <Route path='/auth/*' element={<AuthRoutes/>}/>
            }

            {/* // Por si no esta autenticado y entra a una ruta que no esta en el JournalRoutesKk */}
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>


        </Routes>
    )
}
