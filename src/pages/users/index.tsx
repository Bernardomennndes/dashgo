import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Create New User
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha" >

                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>

                                <Th>User</Th>
                                {isWideVersion && <Th>Sign in date</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bernardo Mendes</Text>
                                        <Text fontSize="sm" color="gray.300">bernardomennndes@outlook.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>23 Mar, 2022</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="black"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        borderLeft="1px solid transparent"
                                        borderColor="gray.600"
                                        borderRadius="0"
                                    >
                                        {isWideVersion && "Edit"}
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bernardo Mendes</Text>
                                        <Text fontSize="sm" color="gray.300">bernardomennndes@outlook.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>23 Mar, 2022</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="black"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        borderLeft="1px solid transparent"
                                        borderColor="gray.600"
                                        borderRadius="0"
                                    >
                                        {isWideVersion && "Edit"}
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bernardo Mendes</Text>
                                        <Text fontSize="sm" color="gray.300">bernardomennndes@outlook.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>23 Mar, 2022</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="black"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        borderLeft="1px solid transparent"
                                        borderColor="gray.600"
                                        borderRadius="0"
                                    >
                                        {isWideVersion && "Edit"}
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>

                    </Table>

                    <Pagination />

                </Box>
            </Flex>
        </Box>
    );
}