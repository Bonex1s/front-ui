import {
  Sheet,
  SheetContent,
  SheetHeader,

  SheetTrigger,
} from '@/components/ui/sheet';
import{ ShoppingCart }from 'lucide-react';
import Cart from '../Cart';
import localize from '@/utils/localize';

export default function SheetMenu() {
  const product = localize.temporaryCards.slice(0, 2);
  return (
    <Sheet>
      <SheetTrigger className='text-black w-5 hover:cursor-pointer hover:text-main'><ShoppingCart /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Cart product={product} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}