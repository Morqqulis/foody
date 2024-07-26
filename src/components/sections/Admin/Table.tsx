import Image from "next/image";

interface ITable {
  headers: string[];
  body: any[];
  trigger?: any;
}

const Table: React.FC<ITable> = ({ headers, body, trigger }): JSX.Element => {
  return (
    <div className="w-full pt-[52px]">
      <table className="min-w-full overflow-y-auto bg-gray-100 text-gray-800">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="border border-gray-200 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body?.map((row) => (
            <tr key={row.$id} className="text-center">
              {Object.entries(row).map(([key, value]) => (
                <td key={row.$id} className="border border-gray-200 px-4 py-2">
                  {key === "image" ? (
                    <Image src={value as string} width={50} height={50} alt={key} />
                  ) : key.toLocaleLowerCase() === "id" ? (
                    <> {value.toString().slice(0, 4)}*** </>
                  ) : (
                    <> {value} </>
                  )}
                </td>
              ))}

              {trigger}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
