import { Box, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import list from '../mock_ingredients.json'
const IngredientContainer = () => {
    const items = JSON.parse(JSON.stringify(list));
    console.log(items);
    return (
        <Box className="">
            <Card>
                <CardHeader>
                    <Heading size='md'>Ingredients</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}
export default IngredientContainer;