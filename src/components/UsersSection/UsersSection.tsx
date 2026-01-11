/** @format */

import type { User } from "@/api/types";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { UsersList } from "@/components/UsersList/UsersList";
import { useUsersSectionStyles } from "./styles";
import { USERS_SECTION_CONTENT } from "./content";
import { constants } from "@/theme";

interface UsersSectionProps {
  users: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const UsersSection = ({
  users,
  isLoading,
  error,
}: UsersSectionProps) => {
  const classes = useUsersSectionStyles();

  return (
    <section className={classes.section}>
      <SectionHeader
        title={USERS_SECTION_CONTENT.sectionTitle}
        count={users?.length || constants.defaults.userCount}
      />
      <UsersList users={users} isLoading={isLoading} error={error} />
    </section>
  );
};
