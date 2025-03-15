'use client'
import { Poppins } from "next/font/google";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
});

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <form className="w-full max-w-[1050px] bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <h1 className={`text-2xl md:text-3xl font-bold text-center py-5 ${poppinsFont.className}`}>Job Posting Form</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Job Title</label>
              <div className="mt-2">
                <input type="text" id="first-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
              <div className="mt-2 relative">
                <select id="country" className="block w-full appearance-none rounded-md bg-white py-2 pl-3 pr-10 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Intern</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Posting Location</label>
              <div className="mt-2">
                <input type="text" id="last-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Required Skills</label>
              <div className="mt-2 relative">
                <select id="country" className="block w-full appearance-none rounded-md bg-white py-2 pl-3 pr-10 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Intern</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Minimum Experience (Years)</label>
              <div className="mt-2">
                <input type="number" id="last-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Salary Range (Optional)</label>
              <div className="mt-2">
                <input type="number" id="last-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Application Deadline</label>
              <div className="mt-2">
                <input type="date" id="last-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
              <div className="mt-2">
                <input type="text" id="last-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Company Website</label>
              <div className="mt-2">
                <input type="text" id="last-name" className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Job Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Provide a detailed description of the role and its responsibilities.</p>
            </div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600">Save</button>
        </div>
      </div>
    </form>
  </div>
);
}

export default Page;
