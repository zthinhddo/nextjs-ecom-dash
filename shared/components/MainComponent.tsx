'use client';

import CustomMain from '@/shared/components/CustomMain';
import { useNavigationMenuContext } from "@/app/context";

export default function MainComponenet({ children } : { children: React.ReactNode }) {
  const { isOpen } = useNavigationMenuContext();

  return (
    <CustomMain open={isOpen}>
        {children}
    </CustomMain>
  );
}