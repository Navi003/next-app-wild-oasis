import { getBookings } from "@/app/_lib/data-service";
import ReservationCard from "../../_components/ReservationCard";
import { auth } from "@/app/_lib/auth";
import ReservationList from "@/app/_components/ReservationList";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  // CHANGE
  // const bookings = [];
  const session = await auth();
  session.user.guestId;
  const bookings = await getBookings(session.user.guestId);
  bookings;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
