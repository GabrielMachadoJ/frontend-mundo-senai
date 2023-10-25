import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Button, Flex, FormControl, FormLabel, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Select, Stack, Text, useToast } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Login } from "..";
import LogoMundoSenai from "../../../assets/logo.png";
import { FiLogOut, FiUser } from "react-icons/fi";
import { AssuntoContext } from "../../../context/AssuntoContext"
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../../context/UsuarioContext";

interface IForm {
  nome: string
  assunto: string
}


interface IAssunto {
  codigo: number;
  assunto: string;
}

export function StartPlay() {
  const [assuntos, setAssuntos] = useState<IAssunto[]>([]);
  const { setIdAssuntoEscolhido } = useContext(AssuntoContext);
  const { setAssuntoEscolhido } = useContext(AssuntoContext);
  const { setNomeDoUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const toast = useToast();

  const methods = useForm<IForm>();
  const { register } = methods;


  useEffect(() => {
    getAssuntos()
  }, [])

  const getAssuntos = async () => {
    const { data } = await axios.get('http://localhost:8080/assunto/listar');
    setAssuntos(data);
  }

  const submitData = (data: IForm) => {
    if (data.nome.trim().length !== 0) {
      setNomeDoUsuario(data.nome)
      assuntos.forEach(element => {
        if (element.assunto === data.assunto) {
          setIdAssuntoEscolhido(element.codigo)
        }
      });
      setAssuntoEscolhido(data.assunto)
      navigate('/quiz')
    } else {
      toast({
        title: "Nome Inválido",
        status: "warning",
        isClosable: true,
        duration: 1500
      })
    }
  }

  return (
    <Flex
      w="100%"
      h="100%"
      justify="space-evenly"
      align="center"
      direction="column"
    >
      <Image
        w="90%"
        src={LogoMundoSenai}
        alt="Logo do mundo senai"
      />
      <form onSubmit={methods.handleSubmit(submitData)}>
        <Stack
          h="100%"
          w="100%"
          gap="3"
        >

          <Text fontFamily="Poppins, sans serif" fontWeight="500" fontSize="1.2rem">Digite seu nome para começar a jogar</Text>
          <FormControl >
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents='none'
                children={<FiUser color='gray.300' />}
              />
              <Input isRequired size="lg" type="text" placeholder="Nome" borderColor="blackAlpha.700" focusBorderColor="purple.800" {...register('nome')} />
            </InputGroup>
          </FormControl>
          <Text fontFamily="Poppins, sans serif" fontWeight="500" fontSize="1.2rem">Escolha o Assunto</Text>
          <Select isRequired size="lg" focusBorderColor="purple.800" borderColor="blackAlpha.700" {...register('assunto')}>
            <option></option>
            {assuntos.map((assunto) => (
              <option key={assunto.codigo} value={assunto.assunto}>{assunto.assunto}</option>
            ))}

          </Select>
          <Button size="lg" colorScheme="purple" type="submit">
            Jogar
          </Button>
        </Stack>
        <Text fontFamily="Poppins, sans serif" fontWeight="400" mt="1" textColor="gray.400">
          Curso Técnico de Desenvolvimento de Sistemas
        </Text>
      </form>
    </Flex>
  )
}