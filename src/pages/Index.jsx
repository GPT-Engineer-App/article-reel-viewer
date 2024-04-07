import React, { useState } from "react";
import { Box, VStack, Heading, Text, Image, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlJTIwaW1hZ2UlMjAxfGVufDB8fHx8MTcxMjQ5NTI4NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Article 2",
    content: "Praesent et metus in urna tempus lacinia.",
    image: "https://images.unsplash.com/photo-1641204312330-f50670fec3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlJTIwaW1hZ2UlMjAyfGVufDB8fHx8MTcxMjQ5NTI4NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Article 3",
    content: "Fusce quis est sed augue rhoncus faucibus.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlJTIwaW1hZ2UlMjAzfGVufDB8fHx8MTcxMjQ5NTI4NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [currentArticle, setCurrentArticle] = useState(0);

  const nextArticle = () => {
    setCurrentArticle((prevArticle) => (prevArticle + 1) % articles.length);
  };

  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg={bgColor}>
      <VStack spacing={4} maxW="sm">
        <Image src={articles[currentArticle].image} alt={articles[currentArticle].title} borderRadius="md" boxSize="300px" objectFit="cover" />
        <Heading size="lg" color={textColor}>
          {articles[currentArticle].title}
        </Heading>
        <Text color={textColor}>{articles[currentArticle].content}</Text>
        <Box>
          <IconButton icon={<FaHeart />} variant="ghost" size="lg" aria-label="Like" mr={2} />
          <IconButton icon={<FaComment />} variant="ghost" size="lg" aria-label="Comment" mr={2} />
          <IconButton icon={<FaShare />} variant="ghost" size="lg" aria-label="Share" />
        </Box>
        <IconButton icon={<FaShare />} variant="solid" size="lg" aria-label="Next Article" onClick={nextArticle} />
      </VStack>
    </Box>
  );
};

export default Index;
