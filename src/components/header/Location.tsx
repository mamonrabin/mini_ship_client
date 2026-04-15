import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Location = () => {
  return (
    <Select>
      <SelectTrigger className="w-[120px] rounded-sm border-transparent bg-[#DC2626] text-white">
        <SelectValue placeholder="Location" />
      </SelectTrigger>

      <SelectContent className="rounded-sm">
        <SelectGroup>
          <SelectItem value="dhaka">Dhaka</SelectItem>
          <SelectItem value="brahmanbaria">Brahmanbaria</SelectItem>
          <SelectItem value="comilla">Comilla</SelectItem>
          <SelectItem value="noakhali">Noakhali</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Location;
