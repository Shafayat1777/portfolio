import React from "react";
import {
  Html,
  Head,
  Body,
  Preview,
  Section,
  Text,
  Container,
  Heading,
  Hr,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

export default function ReactMail({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New message received from Portfolio site!</Preview>
      <Tailwind>
        <Body className="bg-gray-10 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
