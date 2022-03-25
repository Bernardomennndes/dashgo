import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Bernardo Mendes</Text>
                <Text color="gray.300" fontSize="small">bernardomennndes@outlook.com</Text>
            </Box>

            <Avatar size="md" name="Bernardo Mendes" src="https://github.com/bernardomennndes.png" />
        </Flex>
    );
}