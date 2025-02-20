import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
      } = useForm({
        defaultValues: {
          role_id: "Müşteri", // Başlangıçta "Müşteri" seçili olacak
        },
      });
      
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Roller için GET isteği
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((res) => setRoles(res.data))
      .catch(() => setRoles([{ id: 1, name: "Müşteri" }])); // Default değer
  }, []);

  // **Türkçe rollerin İngilizce karşılıklarını eşleştiren obje**
  const roleMapping = {
    "Müşteri": "customer",
    "Yönetici": "admin",
    "Mağaza": "store",
  };

  // Kullanıcının seçtiği rolün İngilizce karşılığını al
  const selectedRole = roleMapping[watch("role_id")];
  const onSubmit = async (data) => {
    try {
      setErrorMessage(null); // Hata mesajını sıfırla
  
      let formData = { ...data };
      delete formData.confirmPassword;  
      // role_id değerini backend için uygun olan İngilizce karşılığıyla değiştir
      formData.role_id = roleMapping[data.role_id] || "customer"; // Eğer eşleşme yoksa müşteri olarak ayarla
  
      if (formData.role_id === "store") {
        formData.store = {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        };
        delete formData.storeName;
        delete formData.storePhone;
        delete formData.tax_no;
        delete formData.bank_account;
      }
  
    
  
      await axios.post("https://workintech-fe-ecommerce.onrender.com/signup", formData);
  
      alert("You need to click the link in the email to activate your account!");
      history.goBack(); // Önceki sayfaya yönlendir
    } catch (error) {
      setErrorMessage("Error signing up. Please check your details.");
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 max-w-lg mx-auto bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* İsim */}
     {/* İsim */}
<label className="block text-gray-700 font-bold">Name</label>
<input
  {...register("name", { 
    required: "Name is required", 
    minLength: { value: 3, message: "Name must be at least 3 characters" } 
  })}
  className="w-full p-2 border rounded mt-1"
  placeholder="Enter your name"
/>
{errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}


      {/* Email */}
      <label className="block text-gray-700 font-bold mt-4">Email</label>
      <input
        {...register("email", { required: "Email is required" })}
        className="w-full p-2 border rounded mt-1"
        type="email"
        placeholder="Enter your email"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      {/* Şifre */}
      {/* Şifre */}
<label className="block text-gray-700 font-bold mt-4">Password</label>
<input
  {...register("password", {
    required: "Password is required",
    minLength: { value: 8, message: "Password must be at least 8 characters" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      message:
        "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character",
    },
  })}
  className="w-full p-2 border rounded mt-1"
  type="password"
  placeholder="Enter your password"
/>
{errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      {/* Şifre Tekrar */}
      <label className="block text-gray-700 font-bold mt-4">Confirm Password</label>
      <input
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) => value === watch("password") || "Passwords do not match",
        })}
        className="w-full p-2 border rounded mt-1"
        type="password"
        placeholder="Confirm your password"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}

    {/* Rol Seçimi */}
<label className="block text-gray-700 font-bold mt-4">Role</label>
<select
  {...register("role_id", { required: "Role is required" })}
  className="w-full p-2 border rounded mt-1"
  value={watch("role_id")} // Seçili değeri kontrol eder
  onChange={(e) => {
    setValue("role_id", e.target.value);
  }} // Değişiklikleri kaydeder
>
  {roles.map((role) => (
    <option key={role.id} value={role.name}>
      {role.name}
    </option>
  ))}
</select>
{errors.role_id && <p className="text-red-500 text-sm">{errors.role_id.message}</p>}

      {/* **Store Seçilirse Ekstra Alanlar** */}
      {selectedRole === "store" && (
        <>
          <label className="block text-gray-700 font-bold mt-4">Store Name</label>
          <input
            {...register("storeName", { required: "Store name is required", minLength: 3 })}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your store name"
          />
          {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName.message}</p>}

          <label className="block text-gray-700 font-bold mt-4">Store Phone</label>
          <input
            {...register("storePhone", { required: "Phone number is required" })}
            className="w-full p-2 border rounded mt-1"
            type="tel"
            placeholder="Enter store phone"
          />
          {errors.storePhone && <p className="text-red-500 text-sm">{errors.storePhone.message}</p>}

          <label className="block text-gray-700 font-bold mt-4">Store Tax ID</label>
          <input
            {...register("tax_no", { required: "Tax ID is required" })}
            className="w-full p-2 border rounded mt-1"
            placeholder="TXXXXVXXXXXX"
          />
          {errors.tax_no && <p className="text-red-500 text-sm">{errors.tax_no.message}</p>}

          <label className="block text-gray-700 font-bold mt-4">Store Bank Account</label>
          <input
            {...register("bank_account", { required: "Bank account is required" })}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter IBAN"
          />
          {errors.bank_account && (
            <p className="text-red-500 text-sm">{errors.bank_account.message}</p>
          )}
        </>
      )}

      {/* Submit Butonu */}
      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-600 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignupForm;
