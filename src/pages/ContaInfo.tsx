import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import CardInfo from "../components/CardInfo"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>(null)
    const { isLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }

        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [isLoggedIn, navigate])

    return (
        <Center paddingTop={16}>
            {
                !userData ? (
                    <Spinner size='xl' color='white' />
                ) : (
                    <Box>
                        <CardInfo 
                            mainContent="Informações da Conta" 
                            content={`Nome: ${userData.name} | Email: ${userData.email}`} 
                        />
                        <Center marginTop={4}>
                            <Link to='/conta/1'>
                                <Text fontSize='xl' color='white' fontWeight='bold'>
                                    Voltar para a Conta
                                </Text>
                            </Link>
                        </Center>
                    </Box>
                )
            }
        </Center>
    )
}

export default ContaInfo