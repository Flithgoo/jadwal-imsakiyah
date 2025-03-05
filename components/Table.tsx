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

export default async function TableComponent() {
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
      <Table className="text-center">
        <TableCaption className="mt-5">Made by Prassetiyo Utomo.</TableCaption>
        <TableHeader>
          <TableRow className="text-xl ">
            <TableHead className="text-center font-semibold p-6">
              Tanggal
            </TableHead>
            <TableHead className="text-center font-semibold">Imsak</TableHead>
            <TableHead className="text-center font-semibold">Subuh</TableHead>
            <TableHead className="text-center font-semibold">Maghrib</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prayers
            .filter((item) => {
              const date = new Date(item.date);
              return !(date.getMonth() === 2 && date.getDate() === 31); // Maret = 2 (0-based index)
            })
            .map((item) => (
              <TableRow key={item.id}>
                <TableCell>{formatDate(item.date)}</TableCell>
                <TableCell className="p-5">{item.time.imsak}</TableCell>
                <TableCell>{item.time.subuh}</TableCell>
                <TableCell>{item.time.maghrib}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
