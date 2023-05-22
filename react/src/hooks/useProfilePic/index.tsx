import { Connection } from "@solana/web3.js";
import { Record } from "@bonfida/spl-name-service";
import { useRecords } from "../useRecords";

/**
 * Returns the profile picture URI for the given domain
 * @param connection The Solana RPC connection object
 * @param domain The domain to fetch the profile picture for
 * @returns The picture URI
 */
export const useProfilePic = (connection: Connection, domain: string) => {
  const record = useRecords(connection, domain, [Record.Pic]);
  const { result, ...rest } = record;
  return { result: result?.[0]?.data?.toString("utf-8"), ...rest };
};