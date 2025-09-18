import { useState } from "react";
import bgImg from "../../assets/h1_hero.jpg";
import axios from "axios";
import { QRCodeCanvas as QRCode } from "qrcode.react";
import { useNavigate } from "react-router-dom";

export default function Apply() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("loanToken");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [successModel, setSuccessModel] = useState(false);

  const [loanApplicationId, setLoanApplicationId] = useState();
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    loanType: "",
    gender: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    address: "",
    city: "",
    state: "",
    occupation: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
    contactNumber:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full Name is required";
    if (!formData.fatherName.trim()) return "Father Name is required";
    if (!formData.motherName.trim()) return "Mother Name is required";
    if (!formData.address.trim()) return "Address is required";
    if (!formData.city.trim()) return "City is required";
    if (!formData.state.trim()) return "State is required";
    if (!formData.loanType) return "Please select a Loan Type";
    if (!formData.gender) return "Please select Gender";
    if (!formData.occupation) return "Please select Occupation";
    if(!formData.contactNumber.trim())return "Contact number is required";
    if (!formData.accountHolderName.trim())
      return "Account holder name is required";
    if (!formData.accountNumber.trim()) return "Account number is required";
    if (!formData.ifscCode.trim()) return "IFSC Code is required";
    if (!formData.bankName.trim()) return "Bank name is required";
    if (!formData.branchName.trim()) return "Branch name is required";

    return "";
  };

  const handleSubmit = async (e) => {
    const userId = localStorage.getItem("userId");
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    formData.userId = userId;
    formData.loanAmount=500;
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}api/user/apply-loan`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoanApplicationId(response?.data?.applyLoanData?._id);
      setIsModalOpen(true);
      setSuccess("Your application submitted successfully!");
      setFormData({
        loanType: "",
        gender: "",
        fullName: "",
        fatherName: "",
        motherName: "",
        address: "",
        city: "",
        state: "",
        occupation: "",
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
        branchName: "",
        contactNumber:""
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePaymentSubmit = async () => {
    if (!uploadedFile) {
      alert("Please upload an image");
      return;
    }

    const paymentData = new FormData();
    paymentData.append("userId", userId);
    paymentData.append("loanApplicationId", loanApplicationId);
    paymentData.append("paymentImage", uploadedFile);

    try {
      await axios.patch(
        `${import.meta.env.VITE_APP_API_BASE_URL}api/user/payment-proof`,
        paymentData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsModalOpen(false);
      setUploadedFile(null);
      setSuccessModel(true);

      setTimeout(() => {
        setSuccessModel(false);
        navigate("/referrals");
      }, 4000);
    } catch (err) {
      alert(
        "Error submitting payment proof: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <section className="w-full pt-16">
      <div
        className="h-[50vh] flex items-center justify-center bg-grid"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-6xl font-bold text-gray-800">APPLY LOAN</h1>
      </div>

      <div className="bg-gray-200 p-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto p-10 bg-white shadow-md rounded-xl"
        >
          {/* Show error or success messages */}
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block font-semibold">* Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Father Name */}
            <div>
              <label className="block font-semibold">* Father Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter father name"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Mother Name */}
            <div>
              <label className="block font-semibold">* Mother Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Enter mother name"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold">* Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* City */}
            <div>
              <label className="block font-semibold">* City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* State */}
            <div>
              <label className="block font-semibold">* State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block font-semibold">* Loan Amount</label>
              <input
                type="number"
                disabled
                name="loanAmount"
                value={500}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Loan Type */}
            <div>
              <label className="block font-semibold">* Loan Type</label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Choose Categories</option>
                <option value="Personal">Personal</option>
                <option value="Education">Study</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Gender */}
            <div className="md:col-span-2">
              <label className="block font-semibold">* Gender</label>
              <div className="flex items-center space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Occupation */}
            <div>
              <label className="block font-semibold">* Occupation</label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Your Occupation</option>
                <option value="Student">Student</option>
                <option value="Job">Job</option>
                <option value="Businessman">Businessman</option>
              </select>
            </div>
                <div>
              <label className="block font-semibold">
                * Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="contact number"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">
                * Account Holder Name
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                placeholder="Enter account holder name"
                className="w-full p-2 border rounded"
              />
            </div>
                    
            <div>
              <label className="block font-semibold">* Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Enter account number"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">* IFSC Code</label>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC code"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">* Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Enter bank name"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">* Branch Name</label>
              <input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                placeholder="Enter branch name"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Email */}
            {/* <div>
              <label className="block font-semibold">* Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full p-2 border rounded"
              />
            </div> */}
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-6 py-2 bg-[#0C3B57] text-white font-semibold rounded disabled:opacity-50"
            >
              {loading ? "Submitting..." : "APPLY NOW"}
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-4">Complete Payment</h2>
            <div className="text-sm text-gray-600 text-center mb-4">
              your prossecing fee is 100 only
            </div>
            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <QRCode value={`pay-to-user-${userId}`} size={150} />
            </div>
            <p className="text-sm text-gray-600 text-center mb-4">
              Scan this QR code to make payment.
            </p>

            <div className="mb-4">
              <label
                htmlFor="payment-proof"
                className="block w-full px-4 py-2 text-center bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
              >
                Upload Payment Screenshot
              </label>
              <input
                id="payment-proof"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {preview && (
              <div className="flex justify-center mb-4">
                <img
                  src={preview}
                  alt="Payment Preview"
                  className="w-24 h-24 object-cover rounded border"
                />
              </div>
            )}
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentSubmit}
                className="px-4 py-2 bg-[#0C3B57] text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {successModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <p className="text-lg font-semibold text-gray-600 text-center mb-4">
              within 24 hours loan amount disbursed in your bank account
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
