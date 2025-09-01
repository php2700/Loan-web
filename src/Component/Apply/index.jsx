import { useState } from "react";
import bgImg from "../../assets/h1_hero.jpg";

export default function Apply() {
      const [formData, setFormData] = useState({
            loanAmount: "",
            purpose: "",
            gender: "",
            firstName: "",
            lastName: "",
            dependants: "",
            email: "",
            phone: "",
            maritalStatus: "",
            townCity: "",
            street: "",
            houseNumber: "",
            homeownerStatus: "",
            employmentIndustry: "",
            employerName: "",
            workPhone: "",
            monthlyIncome: "",
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form Submitted:", formData);
            alert("Loan application submitted!");
      };

      return (
            <section className="w-full  pt-16">
                  <div
                        className="h-[50vh] flex items-center justify-center bg-grid"
                        style={{ backgroundImage: `url(${bgImg})` }}
                  >
                        <h1 className="text-6xl font-bold text-gray-800">
                              APPLY LOAN
                        </h1>
                  </div>
                  <div className="bg-gray-200 p-10">
                        <form
                              onSubmit={handleSubmit}
                              className="max-w-6xl mx-auto p-10 bg-white shadow-md rounded-xl"
                        >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Loan Amount & Purpose */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Loan Amount ($)
                                          </label>
                                          <input
                                                type="number"
                                                name="loanAmount"
                                                value={formData.loanAmount}
                                                onChange={handleChange}
                                                placeholder="Enter amount"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Purpose of Loan
                                          </label>
                                          <select
                                                name="purpose"
                                                value={formData.purpose}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                                required
                                          >
                                                <option value="">
                                                      Choose Categories
                                                </option>
                                                <option value="Business">
                                                      Business
                                                </option>
                                                <option value="Education">
                                                      Education
                                                </option>
                                                <option value="Medical">
                                                      Medical
                                                </option>
                                                <option value="Home">
                                                      Home
                                                </option>
                                          </select>
                                    </div>

                                    {/* Gender */}
                                    <div className="md:col-span-2">
                                          <label className="block font-semibold">
                                                * Select Gender
                                          </label>
                                          <div className="flex items-center space-x-4 mt-2">
                                                <label>
                                                      <input
                                                            type="radio"
                                                            name="gender"
                                                            value="Male"
                                                            checked={
                                                                  formData.gender ===
                                                                  "Male"
                                                            }
                                                            onChange={
                                                                  handleChange
                                                            }
                                                            className="mr-1"
                                                      />
                                                      Male
                                                </label>
                                                <label>
                                                      <input
                                                            type="radio"
                                                            name="gender"
                                                            value="Female"
                                                            checked={
                                                                  formData.gender ===
                                                                  "Female"
                                                            }
                                                            onChange={
                                                                  handleChange
                                                            }
                                                            className="mr-1"
                                                      />
                                                      Female
                                                </label>
                                          </div>
                                    </div>

                                    {/* Names */}
                                    <div>
                                          <label className="block font-semibold">
                                                * First Name
                                          </label>
                                          <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="Enter name"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Last Name
                                          </label>
                                          <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Enter name"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>

                                    {/* Dependants */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Number of Dependants
                                          </label>
                                          <select
                                                name="dependants"
                                                value={formData.dependants}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                                required
                                          >
                                                <option value="">
                                                      Choose Option
                                                </option>
                                                <option value="0">0</option>
                                                <option value="1-2">1-2</option>
                                                <option value="3-4">3-4</option>
                                                <option value="5+">5+</option>
                                          </select>
                                    </div>

                                    {/* Email & Phone */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Email Address
                                          </label>
                                          <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter email"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Phone Number
                                          </label>
                                          <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter number"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>

                                    {/* Marital Status */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Marital Status
                                          </label>
                                          <select
                                                name="maritalStatus"
                                                value={formData.maritalStatus}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                                required
                                          >
                                                <option value="">
                                                      Choose Categories
                                                </option>
                                                <option value="Single">
                                                      Single
                                                </option>
                                                <option value="Married">
                                                      Married
                                                </option>
                                          </select>
                                    </div>

                                    {/* Address */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Town/City
                                          </label>
                                          <input
                                                type="text"
                                                name="townCity"
                                                value={formData.townCity}
                                                onChange={handleChange}
                                                placeholder="Enter city"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Street
                                          </label>
                                          <input
                                                type="text"
                                                name="street"
                                                value={formData.street}
                                                onChange={handleChange}
                                                placeholder="Enter street address"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * House Name/Number
                                          </label>
                                          <input
                                                type="text"
                                                name="houseNumber"
                                                value={formData.houseNumber}
                                                onChange={handleChange}
                                                placeholder="Enter house number"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>

                                    {/* Homeowner Status */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Homeowner Status
                                          </label>
                                          <select
                                                name="homeownerStatus"
                                                value={formData.homeownerStatus}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                                required
                                          >
                                                <option value="">
                                                      Choose Option
                                                </option>
                                                <option value="Owner">
                                                      Owner
                                                </option>
                                                <option value="Renter">
                                                      Renter
                                                </option>
                                          </select>
                                    </div>

                                    {/* Employment */}
                                    <div>
                                          <label className="block font-semibold">
                                                * Employment Industry
                                          </label>
                                          <input
                                                type="text"
                                                name="employmentIndustry"
                                                value={
                                                      formData.employmentIndustry
                                                }
                                                onChange={handleChange}
                                                placeholder="Enter industry"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Employer Name
                                          </label>
                                          <input
                                                type="text"
                                                name="employerName"
                                                value={formData.employerName}
                                                onChange={handleChange}
                                                placeholder="Enter employer name"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Work Phone Number
                                          </label>
                                          <input
                                                type="tel"
                                                name="workPhone"
                                                value={formData.workPhone}
                                                onChange={handleChange}
                                                placeholder="Enter work phone"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                                    <div>
                                          <label className="block font-semibold">
                                                * Monthly Income ($)
                                          </label>
                                          <input
                                                type="number"
                                                name="monthlyIncome"
                                                value={formData.monthlyIncome}
                                                onChange={handleChange}
                                                placeholder="Enter income"
                                                className="w-full p-2 border rounded"
                                                required
                                          />
                                    </div>
                              </div>

                              {/* Submit Button */}
                              <div className="mt-6">
                                    <button
                                          type="submit"
                                          className="w-full  md:w-auto px-6 py-2 bg-[#0C3B57] text-white font-semibold rounded "
                                    >
                                          APPLY NOW
                                    </button>
                              </div>
                        </form>
                  </div>
            </section>
      );
}
