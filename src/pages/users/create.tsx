import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from 'react-query';
import { api } from "../../services/api";

import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Name required'),
    email: yup.string().required('E-mail required').email('Invalid E-mail'),
    password: yup.string().required('Password required').min(6, 'Minimun of 6 characters '),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'Confirm password'),
})

export default function CreateUser() {

    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response.data.user;
    },{
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values);

        router.push('/users');
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >

                    <Heading size="lg" fontWeight="normal" >Create User</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                            <Input
                                name="name"
                                label="Full Name"
                                error={errors.name}
                                {...register('name')}
                            />

                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                            <Input
                                name="password"
                                type="password"
                                label="Password"
                                error={errors.password}
                                {...register('password')} />

                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirm password"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users/create" passHref >
                                <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
                            </Link>
                            <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Save</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}