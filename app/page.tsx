import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PrayerTime = {
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
};

type Prayer = {
  id: string;
  date: string;
  time: PrayerTime;
};

export default async function Page() {
  const res = await fetch(
    "https://waktu-sholat.vercel.app/prayer?latitude=-6.8834598966616625&longitude=109.52347296409584",
    {
      cache: "no-store",
    }
  );
  const { prayers }: { prayers: Prayer[] } = await res.json();
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Table>
        <TableCaption>Made by Prassetiyo Utomo.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Tanggal</TableHead>
            <TableHead>Imsak</TableHead>
            <TableHead>Subuh</TableHead>
            <TableHead>Maghrib</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prayers.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {formatDate(item.date)}
              </TableCell>
              <TableCell>{item.time.imsak}</TableCell>
              <TableCell>{item.time.subuh}</TableCell>
              <TableCell>{item.time.maghrib}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
