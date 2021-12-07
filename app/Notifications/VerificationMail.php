<?php

namespace App\Notifications;

use App\Models\User;
use App\Models\UserVerifications;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerificationMail extends Notification
{
  use Queueable;

  private $user;

  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct(User $user)
  {
    $this->user = $user;
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param mixed $notifiable
   * @return array
   */
  public function via($notifiable)
  {
    return ['mail'];
  }

  /**
   * Get the mail representation of the notification.
   *
   * @param mixed $notifiable
   * @return \Illuminate\Notifications\Messages\MailMessage
   */
  public function toMail($notifiable)
  {

    $userVerification = UserVerifications::find($this->user->id);
    return (new MailMessage)
      ->subject('Please verify your email address.')
      ->line('Hi ' . $this->user->name)
      ->line('Thank you for creating an account with us. Don\'t forget to complete your registration!')
      ->action('Confirm my email address', url('user/verify', $userVerification->token))
      ->line('Thank you for using our application!');
  }

  /**
   * Get the array representation of the notification.
   *
   * @param mixed $notifiable
   * @return array
   */
  public function toArray($notifiable)
  {
    return [
      //
    ];
  }
}
