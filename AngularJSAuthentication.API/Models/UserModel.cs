using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularJSAuthentication.API.Models
{
    public class UserModel
    {
        [Required]
        [Display(Name = "User Name")]
        public string UserName { get; set; }

        [Required]
        [StringLength(100,ErrorMessage="The {0} must be {2} character long.",MinimumLength=6)]
        [DataType(DataType.Password)]
        [Display(Name="Password")]
        public string PassWord { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name="Confirm Password")]
        [Compare("PassWord",ErrorMessage="The Password and Confirmation password do not match")]
        public string ConfirmPassword { get; set; }
    }
}