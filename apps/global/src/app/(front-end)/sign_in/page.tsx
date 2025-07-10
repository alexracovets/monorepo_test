"use client";

import { Container } from "@repo/ui/atoms";
import { FillPhone, SMSVerification } from "@repo/ui/organisms";
import { useUserInfo } from "@repo/ui/store";

export default function SignInPage() {
  const { isPhoneFilled } = useUserInfo();

  return (
    <Container padding roundedBottom roundedTop fixedMargin>
      {!isPhoneFilled && <FillPhone />}
      {isPhoneFilled && <SMSVerification />}
    </Container>
  );
}