import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { SubmitButton } from "@/app/_components/SubmitButton";
export default async function Page({ params }) {
  // CHANGE

  const { bookingId } = params;
  const { numGuests, observation, cabinId } = await getBooking(bookingId);
  const reservationId = 23;

  console.log(observation);

  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <form
        action={updateBooking}
        className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observation">
            Anything we should know about your stay?
          </label>
          <textarea
            defaultValue={observation}
            name="observations"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="updating Reservation...">
            Update resrvation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
