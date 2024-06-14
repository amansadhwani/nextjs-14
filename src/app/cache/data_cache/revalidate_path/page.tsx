import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function RevalidatePath() {
  revalidatePath("/cache/data_cache");
  return (
    <h1>
      Revalidate routes ie data_cache now if you go to data cache route api will
      be called <Link href="/cache/data_cache">Go Back</Link>
    </h1>
  );
}
